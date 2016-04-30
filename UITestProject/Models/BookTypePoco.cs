using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GoodExample.Models
{
    public class BookTypePoco
    {
        [Display(Name = "Name")]
        public string Name { get; set; }

        public int TypeId { get; set; }
    }
}