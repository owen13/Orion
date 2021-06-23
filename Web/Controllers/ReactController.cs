using System;
using System.Collections.Generic;
using System.Linq;
using Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.VisualBasic;
using Models;
using Models.Enums;
using Services;

namespace Web.Controllers
{
    public class ReactController : Controller
    {
        private readonly IComputerService _computerService;

        public ReactController(IComputerService computerService)
        {
            _computerService = computerService;
        }
        
        public IActionResult Index()
        {
            ComputerListWithPartsViewModel computerListWithPartsViewModel = _computerService.GetComputerListViewModel();
            return View(computerListWithPartsViewModel);
        }
    }
}