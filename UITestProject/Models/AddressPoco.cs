using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ProjectUI.Models
{
    public class AddressPoco
    {
        public int Id { get; set; }
        [Display(Name = "Name")]
        public string Name { get; set; }
        public int UserId { get; set; } 
    }
}