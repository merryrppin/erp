using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Administration.Entities
{
    [Table("tblValueType", Schema = "param")]
    public class ValueType
    {
        [Key]
        [Required]
        public int ValueTypeId { get; set; }
        [MaxLength(100)]
        public string TextValue { get; set; }
        [MaxLength(500)]
        public string Description { get; set; }
        [Required]
        public bool Active { get; set; }
    }
}
