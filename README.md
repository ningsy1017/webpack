webpack-dev-server主要是启动了一个使用 express 的 Http 服务器 它的作用主要是用来伺服资源文件。此外这个 Http 服务器和 client 使用了 websocket 通讯协议，原始文件作出改动后，webpack-dev-server会实时的编译，但是最后的编译的文件并没有输出到目标文件夹


注意：你启动webpack-dev-server后，你在目标文件夹中是看不到编译后的文件的,实时编译后的文件都保存到了内存当中。因此很多同学使用webpack-dev-server进行开发的时候都看不到编译后的文件