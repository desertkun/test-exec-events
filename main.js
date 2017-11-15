function Test()
{
}

Test.allow_session = true;

Test.prototype.main = async function(args)
{
    // fetch the events
    var events_list = event.list();
    // feed them back to the user
    return events_list;
};
