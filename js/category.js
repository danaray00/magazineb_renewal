     // 초기에 'Magazine B' 카테고리에 active 스타일 적용
     var activeSection = $('.left_category.active').data('contents');
     $('#' + activeSection).show();
 
     $(document).on('click', '.left_category', function() {
         var selectedSection = $(this).data('contents');
 
         // 모든 섹션 숨기기
         $('.shop_right').hide();
 
         // 선택된 섹션 표시 및 활성화 처리
         $('#' + selectedSection).show();
         activeSection = selectedSection;
 
         // 모든 카테고리의 강조 효과 제거
         $('.left_category').removeClass('active');
 
         // 현재 클릭한 카테고리에 강조 효과 추가
         $(this).addClass('active');
     });