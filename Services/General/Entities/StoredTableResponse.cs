using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.General.Entities
{
    public class StoredTableResponse
    {
        public List<string> Columns { get; set; }
        public List<List<string>> Rows { get; set; }
        public string TableName { get; set; }
    }
}
