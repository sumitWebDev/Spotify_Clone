import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    //local db
    //local array

    private readonly songs :any[]= [];
    create(song){
        this.songs.push(song);
        return this.songs
    }

    findAll (){
        //fetch the songs from the db
        //Error comes while fetching the data from DB
        throw new Error("Random error in DB while fetching record")
        return this.songs
    }
}
