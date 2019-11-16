using Data.Administration.Entities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Product.Entities
{
    [Table("tblFormField", Schema = "dbo")]
    public class FormField
    {
        [Key]
        public int FormFieldId { get; set; }
        [MaxLength(100)]
        public string Name { get; set; }
        public FieldValueType FieldValueType { get; set; }
        public int FieldValueTypeId { get; set; }
        [Required]
        public bool Active { get; set; }
    }
}
