define(function(require) {
    'use strict';

    return {
        removeWrapperElement: function (that) {
            // Get rid of that pesky wrapping-div.
            // Assumes 1 child element present in template.
            that.$el = that.$el.children();
            // Unwrap the element to prevent infinitely
            // nesting elements during re-render.
            that.$el.unwrap();
            that.setElement(that.$el);
        }
    };
});