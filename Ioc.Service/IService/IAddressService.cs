using Ioc.Core.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ioc.Service.IService
{
    public interface IAddressService
    {
        IQueryable<Address> GetAllAddress();
        IQueryable<Address> GetAddressForUser(int userId);
        Address GetAddress(int id); 
        void Insert(Address user);
        void Update(Address user);
        void Delete(Address address);
    }
}
