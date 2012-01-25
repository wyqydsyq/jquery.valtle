// https://github.com/pyrokinetic/jquery.valtle
(function( $ ) {
    $.fn.valtle = function() {
		$(this).each(function(){	
			if(this.value == ''){
				this.value = this.title;
			}else if($(this).text() == ''){
				$(this).text(this.title);
			}
		});
			
		$(this).focus(function(){
			if(this.value == this.title){
				this.value = '';
			}else if($(this).text() == this.title){
				$(this).text('');
			}
		}).blur(function(){
			if(this.value == ''){
				this.value = this.title;
			}else if($(this).text() == ''){
				$(this).text(this.title);
			}
		});
		return this;
	};
})( jQuery );