using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GoodExample.Models
{
    public class BookPoco
    {
        public Int64 ID { get; set; }

        [Display(Name = "Name")]
        public string Name { get; set; }

        [Display(Name = "Author Name")]
        public string Author { get; set; }

        public int EditionNumber { get; set; }

        [Display(Name = "Production Date")]
        public DateTime AddedDate { get; set; }

        public int TypeId { get; set; }

        [Display(Name = "Book Type Name")]
        public string BookTypeName { get; set; }

    }
}