using Services.Layers.Repository.Sale;
using System.Configuration;

namespace Services.Layers.Service.Sale
{
    public class SaleService : ISaleService
    {
        private string ConnString;
        private readonly ISaleRepository _saleRepository;

        public SaleService()
        {
            ConnString = ConfigurationManager.ConnectionStrings["ConnString"].ConnectionString;
            _saleRepository = new SaleRepository(ConnString);
        }

        public void SaveSaleInvoice(string SaleInvoice, string aProductsCompressed, string userCreatedBy) => _saleRepository.SaveSaleInvoice(SaleInvoice, aProductsCompressed, userCreatedBy);
    }
}
