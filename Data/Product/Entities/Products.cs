using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Product.Entities
{
    [Table("tblProducts", Schema = "dbo")]
    public class Products
    {
        [Key]
        public int ProductId { get; set; }
    }
}
