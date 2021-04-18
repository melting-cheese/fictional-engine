var flag = 1;

	$(document).ready(function () {  
		
		
		$('#submit_button').click(function () {
			var pwd = $('#pwd').val();
			if(pwd == '86390657'){
				$('#black').fadeOut();
				$('#test').fadeIn();
				flag = 1;
			}
		});

			$('#class').click(function () {
				if(flag == 1){
				window.location.href = "./class.html";
				}
			});
			$('#play').click(function () {
				if(flag == 1){
				window.location.href = "./play/index.html";
				}				
			});
			$('#start').click(function () {	
				if(flag == 1){
					var star_check = $("input:checkbox[name='agree']").is(":checked");
					if(star_check == 0){
						alert('공지 사항을 읽어주세요.');
					}
					else{
						var gender = $("select[name=gender]").val();
						var age = $("select[name=age]").val();
						var sexual = $("select[name=sexual]").val();
												
						if((gender != 0) && (age == '0019') &&(sexual != 0)){
							var con_test = confirm("이 테스트는 성인을 위한 테스트입니다.\n이 테스트로 발생한 문제의\n관한 책임은 테스트를 이용한 당사자에게 있습니다.\n그래도 계속 하시겠습니까?");
							if(con_test == true){
							  window.location.href = "test_q_1.html?gender="+gender+"&age="+age+"&sexual="+sexual;
							}
							else if(con_test == false){
							}
						}
						else if((gender != 0) && (age != 0) &&(sexual != 0)){
							window.location.href = "test_q_1.html?gender="+gender+"&age="+age+"&sexual="+sexual;
						}
						else{
							alert('모든 항목을 선택해야 합니다.');
						}
					}
				}
			});
	});
