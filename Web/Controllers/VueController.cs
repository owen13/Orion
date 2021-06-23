using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    public class VueController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}