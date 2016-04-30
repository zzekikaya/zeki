using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Koton.Models
{
    public class UserAddressPoco
    {
        public int ID { get; set; }
        [Display(Name = "Name")]
        public string Name { get; set; } 
        public int AddressId { get; set; }
        
    }
}