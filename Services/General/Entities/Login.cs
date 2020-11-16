namespace Services.General.Entities
{
    public class Login
    {
        public int UserId { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public string login { get; set; }
        public string password { get; set; }
    }
}
