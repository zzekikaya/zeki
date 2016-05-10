using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Runtime.Remoting.Proxies;
using System.Text;
using System.Threading.Tasks;

namespace Proxy
{
    public class ProxyGenerator<TInterface, Tclass> : RealProxy
    {
        public ProxyGenerator() : base(typeof(TInterface))
        {

        }
        public override IMessage Invoke(IMessage msg)
        {
            IMethodCallMessage mcm = (IMethodCallMessage)msg;
            //parametre olarak verilen class' yaratılır
            object instance = Activator.CreateInstance(typeof(Tclass));
            object[] attrs = mcm.MethodBase.GetCustomAttributes(true);
            object returnVal = mcm.MethodBase.Invoke(instance, mcm.Args);

            return new ReturnMessage(returnVal, mcm.Args, mcm.ArgCount, mcm.LogicalCallContext, mcm);

        }
        public static TInterface CreateProxy()
        {
            ProxyGenerator<TInterface, Tclass> pg = new ProxyGenerator<TInterface, Tclass>();
            return (TInterface)pg.GetTransparentProxy();
        }
    }
}
