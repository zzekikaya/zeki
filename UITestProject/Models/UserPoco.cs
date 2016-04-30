using Koton.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ioc.Web.Models
{
    public class UserPoco
    {
        public int ID { get; set; }
        [Display(Name = "First Name")]
        public string Name { get; set; }
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        [Display(Name = "User Name")]
        public string Email { get; set; }
        public string AddressName { get; set; }
        public int AddressId { get; set; }
    }
}