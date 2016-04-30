using System;
namespace Ioc.Core.Data
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string LastName { get; set; }
        public int AddressId { get; set; } 
     }
}
