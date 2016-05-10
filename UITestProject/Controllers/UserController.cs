using Ioc.Core.Data;
using Ioc.Service;
using Ioc.Service.IService;
using Ioc.Web.Models;

using Ninject;
using ProjectUI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Ioc.Web.Controllers
{
    public class UserController : Controller
    {

        private IUserService _userService;
        private IAddressService _addressService;

        [Inject]
        public UserController(IUserService userService, IAddressService addressService)
        {
            this._userService = userService;
            this._addressService = addressService;
        }
        //unit test için yazımıştır.
        public UserController(IUserService userService )
        {
            this._userService = userService; 
        }

        public ActionResult Index()
        {
            return View();

        }
        [HttpGet]
        public JsonResult GetAll()
        {
            List<UserPoco> userAll = new List<UserPoco>();
            IEnumerable<UserPoco> users = _userService.GetUsers().Select(u => new UserPoco
            {
                ID = u.ID,
                Name = u.Name,
                LastName = u.LastName,
                Email = u.Email,
                AddressId = u.AddressId
            });

            foreach (var item in users)
            {
                item.AddressName = _addressService.GetAddressForUser(item.AddressId).Select(u => new AddressPoco
              {
                  Id = u.ID,
                  Name = u.Name

              }).FirstOrDefault().Name;

                userAll.Add(item);
            }
            return Json(userAll, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetById(int? id)
        {
            UserPoco model = new UserPoco();
            if (id.HasValue && id != 0)
            {
                User userEntity = _userService.GetUser(id.Value);
                model.ID = userEntity.ID;
                model.Name = userEntity.Name;
                model.LastName = userEntity.LastName;
                model.Email = userEntity.Email;
                model.AddressId = userEntity.AddressId;

                //model.AddressPoco = address.Select(x => new AddressPoco { Id = x.ID, Name = x.Name, userId = x.UserId });

            }
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Create(UserPoco model)
        {
            try
            {
                if (model.ID == 0)
                {
                    User userEntity = new User
                    {
                        ID = model.ID,
                        Name = model.Name,
                        LastName = model.LastName,
                        Email = model.Email,
                        AddressId = model.AddressId

                    };
                    _userService.InsertUser(userEntity);
                }

            }
            catch (Exception ex)
            {
                throw;
            }
            return RedirectToAction("index");
        }

        [HttpPost]
        public ActionResult Update(UserPoco employee)
        {
            User userEntity = _userService.GetUser(employee.ID);
            userEntity.Name = employee.Name;
            userEntity.Email = employee.Email;
            userEntity.LastName = employee.LastName;
            userEntity.AddressId = employee.AddressId;

            _userService.UpdateUser(userEntity);
            if (userEntity.ID > 0)
            {
                return RedirectToAction("index");
            }

            return View(employee);
        }
        [HttpPost]
        public ActionResult DeleteUser(int id)
        {
            try
            {
                if (id != 0)
                {
                    User userEntity = _userService.GetUser(id);
                    _userService.DeleteUser(userEntity);
                    return RedirectToAction("Index");
                }
                return View();
            }
            catch
            {
                return View();
            }
        }

        #region  address
        [HttpGet]
        public JsonResult GetAddressById(int id)
        {
            Address addressEntity = _addressService.GetAddress(id);
            AddressPoco addressPoco = new AddressPoco
            {
                Id = addressEntity.ID,
                Name = addressEntity.Name

            };
            return Json(addressPoco, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetAllAddress()
        {
            IEnumerable<AddressPoco> address = _addressService.GetAllAddress().Select(u => new AddressPoco
            {
                Id = u.ID,
                Name = u.Name
            });

            return Json(address, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult CreateAddress(AddressPoco address)
        {
            try
            {
                if (address.Id == 0)
                {
                    Address addressEntity = new Address
                    {
                        ID = address.Id,
                        Name = address.Name

                    };
                    _addressService.Insert(addressEntity);
                }

            }
            catch (Exception ex)
            {
                throw;
            }
            return RedirectToAction("index");
        }
        #endregion
    }
}
