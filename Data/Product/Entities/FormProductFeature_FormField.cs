using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Product.Entities
{
    [Table("tblFormProductFeature_FormField", Schema = "dbo")]
    public class FormProductFeature_FormField
    {
        [Key]
        public int FormProductFeature_FormFieldId { get; set; }
        public Form FormProductFeature { get; set; }
        public int FormProductFeatureId { get; set; }
        public Form FormField { get; set; }
        public int FormFieldId { get; set; }
        [Required]
        public int Order { get; set; }
        [Required]
        public bool Active { get; set; }
    }
}
