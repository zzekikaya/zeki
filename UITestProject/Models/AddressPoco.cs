using System.ComponentModel.DataAnnotations;

namespace ProjectUI
{
    public class AddressPoco
    {
        public int Id { get; set; }
        [Display(Name = "Name")]
        public string Name { get; set; }
        public int UserId { get; set; } 
    }
}