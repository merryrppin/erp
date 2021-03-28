using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Layers.Service.Sale
{
    public interface ISaleService
    {
        void SaveSaleInvoice(string SaleInvoice, string aProductsCompressed, string userCreatedBy);
    }
}
