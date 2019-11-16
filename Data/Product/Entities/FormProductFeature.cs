using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Product.Entities
{
    [Table("tblFormProductFeature", Schema = "dbo")]
    public class FormProductFeature
    {
        [Key]
        public int FormProductFeatureId { get; set; }
        [MaxLength(100)]
        public string Name { get; set; }
        public Form Form { get; set; }
        public int FormId { get; set; }
        [Required]
        public int Columns { get; set; }
        [NotMapped]
        public List<FormField> FormFields { get; set; }
    }
}
