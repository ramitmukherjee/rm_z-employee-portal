export class Message {

    messages: string[] = [];
    status: string;

    setMessage(message: Message): void {
        this.messages.push(...message.messages);
        this.status = message.status;
    }

    clearOldMessagesAndSet(message: Message): void {
        this.clearMessages();
        this.setMessage(message);
    }

    clearMessages(): void {
        this.messages = [];
    }

}