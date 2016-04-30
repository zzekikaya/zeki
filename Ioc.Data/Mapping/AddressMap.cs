using Ioc.Core.Data;
using System.Data.Entity.ModelConfiguration;

namespace Ioc.Data.Mapping
{
    public class AddressMap : EntityTypeConfiguration<Address>
    {
        public AddressMap()
        {
            //key
            Property(t => t.ID);
            //properties
            Property(t => t.Name).IsRequired();
           
            ToTable("Address");
        }
    }

}
