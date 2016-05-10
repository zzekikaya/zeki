using Ioc.Service;
using Ioc.Web.Controllers;
using Ioc.Web.Models;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace UnitTestProject1
{
    [TestFixture]
    public class UserTest
    {
        private Mock<IUserService> mockUserService;

        public UserTest()
        {
            mockUserService = new Mock<IUserService>();
        }
        //[Test]
        //public void TestUserSave()
        //{
        //    UserController userController = new UserController(mockUserService.Object);
        //    var user = new UserPoco();
        //    user.AddressId = 4;
        //    user.Email = "test@gmail.com";
        //    user.LastName = "kaya";
        //    user.Name = "zeki";
        //    ActionResult result = userController.Create(user);
        //    Assert.IsInstanceOf<ContentResult>(result);
        //}
    }
}
