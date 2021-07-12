    $ npm i express axios
    $ cd internal
    $ docker build -t internal .
    $ docker run internal
    $ cd external
    $ docker build -t external .
    $ docker run -p 8088:8082 external
    
## Container to container communication
I thought if I could figure out the IP of the internal container, then I can place it in the internal.http file in the place of localhost and it would work. The command for figuring out the IP is - 

    $ docker inspect <container_id> | grep IPAddress
    
But this doesn't work. The resources I could find showed how to check if the default bridge network is running and how to communicate with another container by using wget in the terminal. I don't know how to make it work.
