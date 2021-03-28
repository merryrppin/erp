using System.Data;
using System.Data.SqlClient;

namespace Services.Layers.Repository.Sale
{
    public class SaleRepository : ISaleRepository
    {
        protected string stringConnection;
        public SaleRepository(string stringConnection)
        {
            this.stringConnection = stringConnection;
        }

        public void SaveSaleInvoice(string SaleInvoice, string aProductsCompressed, string UserCreatedBy)
        {
            string aProducts = LZStringCSharp.LZString.DecompressFromUTF16(aProductsCompressed);
            using (SqlConnection con = new SqlConnection(stringConnection))
            {
                using (SqlCommand cmd = new SqlCommand("SaveSaleInvoice", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@SaleInvoice", SqlDbType.VarChar).Value = SaleInvoice;
                    cmd.Parameters.Add("@Products", SqlDbType.VarChar).Value = aProducts;
                    cmd.Parameters.Add("@UserCreatedBy", SqlDbType.VarChar).Value = UserCreatedBy;

                    con.Open();
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
