$(function() {
    // روی هر آیتم منو کلیک کنید
    $(".list-disc li").click(function() {
      // کلاس active را به آن آیتم اضافه کنید
      $(this).addClass("active");
      // کلاس active را از سایر آیتم ها حذف کنید
      $(".list-disc li").not(this).removeClass("active");
    });
  
    // روی هر آیتم منو قرار بگیرید
    $(".list-disc li").hover(function() {
      // کلاس hover را به آن آیتم اضافه کنید
      $(this).addClass("hover");
    }, function() {
      // کلاس hover را از آن آیتم حذف کنید
      $(this).removeClass("hover");
    });
  
    // پیمایش با کلید
    $(document).keydown(function(event) {
      // اگر کلید جهت دار بالا یا پایین فشار داده شود
      if (event.keyCode === 38 || event.keyCode === 40) {
        // آیتم بعدی یا قبلی را انتخاب کنید
        var nextItem = $(this).find(".list-disc li").filter(function() {
          return $(this).hasClass("active") ? false : true;
        }).first();
        if (nextItem.length > 0) {
          nextItem.click();
        }
      }
    });
  
    // جستجو
    $(function() {
      // نوار جستجو را پیدا کنید
      var searchBar = $(".search-bar");
  
      // روی دکمه جستجو کلیک کنید
      searchBar.find(".search-button").click(function() {
        // متن جستجو را پیدا کنید
        var searchText = searchBar.find("input").val();
  
        // آیتم های منو را فیلتر کنید
        $(".list-disc li").each(function() {
          if ($(this).text().toLowerCase().includes(searchText.toLowerCase())) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });
    });
  
    // افزودن به سبد خرید
    $(function() {
      // روی هر آیتم منو کلیک کنید
      $(".list-disc li").click(function() {
        // آیتم منو را به سبد خرید اضافه کنید
        var item = {
          name: $(this).text(),
          price: 1000,
        };
        $.ajax({
          url: "/cart",
          type: "post",
          data: JSON.stringify(item),
        });
      });
    });
  });
  