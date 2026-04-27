class ChannelIterator {
    constructor(channels) { this.channels = channels; this.index = 0; }
    next() { return this.channels[this.index++]; }
    hasNext() { return this.index < this.channels.length; }
}