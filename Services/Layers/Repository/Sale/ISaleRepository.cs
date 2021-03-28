namespace Services.Layers.Repository.Sale
{
    public interface ISaleRepository
    {
        void SaveSaleInvoice(string SaleInvoice, string aProductsCompressed, string userCreatedBy);
    }
}
