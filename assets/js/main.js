          
          var itemsMenu = document.getElementsByClassName("itemMenu");
          var classesRotate =['rotateHome','rotateAbout','rotateSkills','rotateContact'];
          var classesMenu =['menuHome','menuAbout','menuSkills','menuContact'];
          var classesNameBar =['nameHome','nameAbout','nameSkills','nameContact'];
          
          function changeMenu(menuSelecionado)
          {
            var rotateAttr= menuSelecionado.dataset.rotate
            removeManyClasses('itemsWrapper',classesRotate);
            removeManyClasses('mainMenu',classesMenu);
            removeManyClasses('nameBar',classesNameBar);
            jQuery('.itemsWrapper').addClass('rotate'+rotateAttr);
            jQuery('.mainMenu').addClass('menu'+rotateAttr);
            jQuery('.nameBar').addClass('name'+rotateAttr);     
          }


          //Coloca as funcoes em cada click do menu
          function addClickOnMenu(){
            for(var i=0; i<itemsMenu.length;i++)
            {
              (function () {
                  
                  var menuSelecionado = itemsMenu[i];

                  itemsMenu[i].addEventListener('click', function()
                  {
                      
                      changeMenu(menuSelecionado)

                  },false);

              }());
            }          
         }

        addClickOnMenu();

        function removeManyClasses(classOfOrigin,classesToRemove)
          {

            for(var i=0; i<classesToRemove.length;i++)
            {
              console.log(classOfOrigin);
              console.log(classesToRemove[i]);
              jQuery('.'+classOfOrigin).removeClass(classesToRemove[i]);
            }

          }








