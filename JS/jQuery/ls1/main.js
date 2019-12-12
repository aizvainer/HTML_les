/*1

$('#id')
$('.class')
$('div')
$('*')

$('h2,p')
$('h2 span')
$('h2>span')
$('h2 +p')
$('h2 ~ p').css('border', '2px solid #000')

$('a[download]').css('border', '1px solid red')
$('a[href="http://ya.ru"]').css('border', '1px solid green')
$('a[href!="http://ya.ru"]').css('border', '1px solid green')
$('a[href^="http://"]').css('border', '1px solid grey')
$('a[href$=".com"]').css('border', '1px solid blue')
$('a[href*="google"]').css('border', '1px solid brown')
$('a[data-target|="main"]').css('border', '1px solid red')
$('a[href][download]').css('border', '1px solid black')


2
//$('p:first').css('border', '1px solid red')
//$('p:last').css('border', '1px solid red')
//$('a:eq(2)').css('border', '1px solid red')
//$('*:not(h2,p)').css('border', '1px solid red')
//$('li:odd').css('border', '1px solid red')
//$('li:even').css('border', '1px solid red')
//$('li:gt(0)').css('border', '1px solid red')
//$('li:lt(3)').css('border', '1px solid red')
//$('*:header').css('border', '1px solid red')
//$('li:animated').css('border', '1px solid red')
//$('li:hidden').css('border', '1px solid red')
//$('li:visible').css('border', '1px solid red')
//$('li:lang(ru)').css('border', '1px solid red')

//$('li:contains(файл)').css('border', '1px solid red')
//$('p:empty').text("текс")
//$('h2:has(span)').css('border', '1px solid #000')
//$('span:parent').css('border', '1px solid #000')


//$('input').css('border', '1px solid red')
//$('input:button').css('border', '1px solid red')
//$('input:radio').css('display', 'block')
//$('input:checkbox').css('display', 'block')
//$('input:password').css('border', '1px solid red')
//$('input:text').css('border', '1px solid red')
//$('input:file').css('border', '1px solid red')
//$('input:reset').css('border', '1px solid red')
//$('input:image').css('border', '1px solid red')
//$('input:focus').css('display', 'block')
//$('input:checked').css('border', '1px solid red')
//$('input:enabled').css('border', '1px solid red')
//$('input:disabled').css('border', '1px solid red')
//$('input:submit').css('border', '1px solid red')


3
$('button').dblclick(function() {
	console.log("Дважды")
})

$('ul li').mousedown(function(event){
	$(this).css('color', 'red')
})

$('ul li').mouseup(function(event){
	$(this).css('color', '#333')
})

$('ul li').mouseover(function(event){
	$(this).css('color', 'blue')
})

$('ul li').mouseout(function(event){
	$(this).css('color', 'black')
})

$('ul li').mousemove(function(event){
	$(this).toggleClass('blue')
})



$('input').keydown(function(event){
	console.log($(this).val())
})

$('input').keyup(function(event){
	$('p').text($(this).val())
})

$('input').keypress(function(eventObject) {
	console.log(eventObject.which)
})



$(function(){
	$('p').text('DOM элементы загружены')
})

$(window).load(function(){
})

$(window).unload(function(){
	alert("Пока!")
})

$(window).resize(function(event){
	console.log("размер окна изменен")
})

$(window).scroll(function(event){
	console.log("страница прокручена")
})
*/

$('ul li').click(function(event){
	console.log("Ты нажал на элемент")
	$('ul').append('<li>Дополнительный элемент</li>')
})

function addAndStop(e) {
	$('ul').append('<li>Дополнительный элемент</li>')
	$('ul').off('click')
}

$('ul').on('click', 'li', addAndStop)