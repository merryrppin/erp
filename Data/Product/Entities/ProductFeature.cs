using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Product.Entities
{
    [Table("tblProductFeature", Schema = "dbo")]
    public class ProductFeature
    {
        [Key]
        public int ProductFeatureId { get; set; }
        public Product Product { get; set; }
        public int ProductId { get; set; }
    }
}
