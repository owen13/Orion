using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Models;
using Models.Constants;
using Web.Models;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IUnitOfWork _unitOfWork;
        private readonly MySettings _settings;

        public HomeController(ILogger<HomeController> logger, IUnitOfWork unitOfWork, IOptions<MySettings> settings)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
            _settings = settings.Value;
        }

        public IActionResult Index()
        {
            string test1 = _settings.TestSetting1;
            int test2 = _settings.TestSetting2;

            HomeViewModel viewModel = new HomeViewModel()
            {

            };
            
            return View(viewModel);
        }

        public IActionResult Actors()
        {
            List<Actor> actors = _unitOfWork.Actors.GetAll();
            return View(actors);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            _logger.LogError(LogEvents.RandomLogEvent, "Log 1");

            return View(new ErrorViewModel {RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier});
        }

        public IActionResult ReturnNotFound()
        {
            _logger.LogError(LogEvents.AnotherRandomLogEvent, "Log 2");
            return NotFound();
        }
            
    }
}