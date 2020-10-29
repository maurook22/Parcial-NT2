export default {

	methods: {

		formatearFecha : function(fyh) {
            return new Date(fyh).toLocaleString()
		},
		
		agregaSignoPesos(importe){
			return '$' + importe
		}	
		
	}

}