using System.Data.Entity.ModelConfiguration;
using Ioc.Core.Data;

namespace Ioc.Data.Mapping
{
    public class UserMap : EntityTypeConfiguration<User>
    {
        public UserMap()
        {
            //key
            HasKey(t => t.ID);
            //properties
            Property(t => t.Name).IsRequired();
            Property(t => t.LastName);
            Property(t => t.Email);
            Property(t => t.AddressId).IsRequired();
            //table
            ToTable("Users");
        }
    }
}
