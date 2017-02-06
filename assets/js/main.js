          
          var itensMenu = document.getElementsByClassName("itemMenu");
          function changeMenu(menuSelecionado)
          {
            var rotateAttr= menuSelecionado.dataset.rotate
            eliminateRotate();
            eliminateMenu();
            eliminateNameBar();
            jQuery('.itemsWrapper').addClass('rotate'+rotateAttr);
            jQuery('.mainMenu').addClass('menu'+rotateAttr);
            jQuery('.nameBar').addClass('name'+rotateAttr);     
          }


          //Coloca as funcoes em cada click do menu
          function addClickOnMenu(){
            for(var i=0; i<itensMenu.length;i++)
            {
              (function () {
                  
                  var menuSelecionado = itensMenu[i];

                  itensMenu[i].addEventListener('click', function()
                  {
                      
                      changeMenu(menuSelecionado)

                  },false);

              }());
            }          
         }

         addClickOnMenu();

          function eliminateRotate()
          {
              jQuery('.itemsWrapper').removeClass('rotateHome');
              jQuery('.itemsWrapper').removeClass('rotateAbout');
              jQuery('.itemsWrapper').removeClass('rotateSkills');
              jQuery('.itemsWrapper').removeClass('rotateContact');
          }

          function eliminateMenu()
          {
              jQuery('.mainMenu').removeClass('menuHome');
              jQuery('.mainMenu').removeClass('menuAbout');
              jQuery('.mainMenu').removeClass('menuSkills');
              jQuery('.mainMenu').removeClass('menuContact');
          }

          function eliminateNameBar()
          {
              jQuery('.nameBar').removeClass('nameHome');
              jQuery('.nameBar').removeClass('nameAbout');
              jQuery('.nameBar').removeClass('nameSkills');
              jQuery('.nameBar').removeClass('nameContact');
          }








