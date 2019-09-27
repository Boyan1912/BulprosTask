using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularAspNetCoreSPAApp
{
    public class JomoTrip
    {
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }
        public string Origin { get; set; }
        public string Destination { get; set; }
        public string Description { get; set; }
        public string UserId { get; set; }
    }
}
