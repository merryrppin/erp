using Newtonsoft.Json.Linq;
using Services.General;
using Services.Layers.Service.Sale;
using System;
using System.Web.Http;

namespace Web.Controllers
{
    public class SaleController : ApiController
    {
        private readonly ISaleService _saleService;

        public SaleController()
        {
            _saleService = new SaleService();
        }

        [HttpPost]
        [Route("api/sale/saveSaleInvoice")]
        public bool SaveSaleInvoice(JObject jsonData)
        {
            try
            {
                dynamic json = jsonData;
                _saleService.SaveSaleInvoice(json.SaleInvoice.Value, json.aProductsCompressed.Value, json.UserCreatedBy.Value);
                return true;
            }
            catch(Exception)
            {
                throw;
            }
        }
    }
}