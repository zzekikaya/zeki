using Ioc.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ioc.Core.Data;
using Ioc.Data;

namespace Ioc.Service.Service
{
    public class AddressService : IAddressService
    {

        private IRepository<Address> _addressRepository;
        public AddressService(IRepository<Address> addressRepository)
        {
            this._addressRepository = addressRepository;
        }
        public void Delete(Address address)
        {
            _addressRepository.Delete(address);
        }

        public Address GetAddress(int id)
        {
            return _addressRepository.GetById(id);
        }

        public IQueryable<Address> GetAddressForUser(int UserId)
        {
            return _addressRepository.Table.Where(x => x.ID == UserId);
        }

        public IQueryable<Address> GetAllAddress()
        {
            return _addressRepository.Table;
        }

        public void Insert(Address user)
        {
            _addressRepository.Insert(user);
        }

        public void Update(Address user)
        {
            _addressRepository.Update(user);
        }
    }
}
