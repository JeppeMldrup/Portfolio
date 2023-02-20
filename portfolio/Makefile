build:
	ng build

image: build
	sudo docker build . -t jeppemaldr/portfolio:latest

push: image
	sudo docker push jeppemaldr/portfolio:latest