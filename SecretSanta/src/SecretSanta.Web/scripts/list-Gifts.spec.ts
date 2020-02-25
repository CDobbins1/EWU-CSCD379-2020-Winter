﻿import { hello, App } from './list-Gifts';

import { expect } from 'chai';

import 'mocha';

import { IGiftClient, Gift, GiftInput, User} from "./secretsanta-client"



describe('Hello function', () => {
    it('should return hello world', () => {
        const result = hello();
        expect(result).to.equal('Hello world!');
    });
});



describe('GetAllGifts', () => {
    it('return all gifts', async () => {
        const app = new App(new MockGiftClient());
        const actual = await app.getAllGifts();
        expect(actual.length).to.equal(5);
    });
});

class MockGiftClient implements IGiftClient {
    async getAll(): Promise<Gift[]> {
        var user = new User({
            firstName: "Inigo",
            lastName: "Montoya",
            gifts: null,
            groups: null,
            id: 42
        });

        var gifts = [];
        for (var i = 0; i < 5; i++) {
            gifts[i] = new Gift({
                title: "Title",
                description: "Description",
                url: "www.Test.com",
                userId: user.id,
                id: i
            });
        }
        return gifts;
    }

    post(entity: GiftInput): Promise<Gift> {
        throw new Error("Method not implemented.");
    }

    get(id: number): Promise<Gift> {
        throw new Error("Method not implemented.");
    }

    put(id: number, value: GiftInput): Promise<Gift> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}