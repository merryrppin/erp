using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Product.Entities
{
    [Table("tblForm_FormProductFeature", Schema = "dbo")]
    public class Form_FormProductFeature
    {
        [Key]
        public int Form_FormProductFeatureId { get; set; }
        public Form Form { get; set; }
        public int FormId { get; set; }
        public Form FormProductFeature { get; set; }
        public int FormProductFeatureId { get; set; }
        [Required]
        public int Order { get; set; }
        [Required]
        public bool Active { get; set; }
    }
}
