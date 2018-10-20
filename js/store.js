/*global store*/
'use strict';

const store =(function(){	

	const page=workPage;
	const menuOpen=false;

	const refreshPage = () => location.reload(); 

	return {
		page,
		menuOpen

	};
}());



