(function(){
    angular.module("turtleFacts").controller("listCtrl", listController);
    
    listController.$inject = ['quizMetrics','DataService'];
    function listController(quizMetrics,DataService){
        var vm=this;
        vm.quizMetrics=quizMetrics;
       vm.data=DataService.turtlesData;
        vm.activeTurtle={};
        vm.changeActivrTurtle=changeActivrTurtle;
        vm.search="";
        vm.activateQuiz=activateQuiz;
        
        function changeActivrTurtle(index){
            vm.activeTurtle=index;
        }
        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }
    }
    
   
})();