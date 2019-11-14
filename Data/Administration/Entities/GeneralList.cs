using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Administration.Entities
{
    [Table("tblGeneralList", Schema = "param")]
    public class GeneralList
    {
        [Key]
        public int GeneralListId { get; set; }
        [Required]
        [MaxLength(100)]
        public string ListName { get; set; }
        [MaxLength(500)]
        public string Description { get; set; }
        public ValueType ValueType { get; set; }
        public int ValueTypeId { get; set; }
        [Required]
        public bool Active { get; set; }
    }
}
