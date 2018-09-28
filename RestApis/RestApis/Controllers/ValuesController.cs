using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RestApis.Controllers
{
    public class ValuesController : ApiController
    {
        [HttpGet]
        [Route ("api/values")]
        public IEnumerable<string> getValues(string val1, string val2)
        {
            return new string[] { val1, val2 };
        }
       
    }
}
