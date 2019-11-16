using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Product.Entities
{
    [Table("tblForm", Schema = "dbo")]
    public class Form
    {
        [Key]
        public int FormId { get; set; }
        [MaxLength(100)]
        public string NameForm { get; set; }
        public string Description { get; set; }
        [NotMapped]
        List<FormProductFeature> FormProductFeature { get; set; }
    }
}
